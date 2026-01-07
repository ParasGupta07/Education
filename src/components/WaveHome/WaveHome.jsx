import { useEffect, useRef } from "react";
import * as THREE from "three";
import { createNoise4D } from "simplex-noise";
import { TweenMax, Sine } from "gsap";
import MacBook from "../MacBook/MacBook";
import TextType from "../AnimatedText/TextType";
import SplitText from "../AnimatedText/SplitText";
import "./WaveHome.css";

const WaveHome = () => {
  const waveCanvasRef = useRef(null);
  const booksContainerRef = useRef(null);

  useEffect(() => {
    const conf = { fov: 75, cameraZ: 75, xyCoef: 50, zCoef: 10 };
    let rendererWave, sceneWave, cameraWave, width, height, wWidth, wHeight, plane;

    const simplex = { noise4D: createNoise4D() };
    const mouse = new THREE.Vector2();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mousePosition = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();

    initWave();

    function initWave() {
      rendererWave = new THREE.WebGLRenderer({
        canvas: waveCanvasRef.current,
        antialias: true,
        alpha: true,
      });

      cameraWave = new THREE.PerspectiveCamera(conf.fov);
      cameraWave.position.z = 60;

      updateSizeWave();
      window.addEventListener("resize", updateSizeWave);

      document.addEventListener("mousemove", (e) => {
        const v = new THREE.Vector3();
        cameraWave.getWorldDirection(v);
        v.normalize();
        mousePlane.normal = v;
        mouse.x = (e.clientX / width) * 2 - 1;
        mouse.y = -(e.clientY / height) * 2 + 1;
        raycaster.setFromCamera(mouse, cameraWave);
        raycaster.ray.intersectPlane(mousePlane, mousePosition);
      });

      initSceneWave();
      animateWave();
    }

    function initSceneWave() {
      sceneWave = new THREE.Scene();

      const geo = new THREE.PlaneGeometry(wWidth, wHeight, wWidth / 2, wHeight / 2);
      const colors = [];
      const colorA = new THREE.Color("#7AD1FF");
      const colorB = new THREE.Color("#8A82FF");
      const colorC = new THREE.Color("#B278FF");
      const colorD = new THREE.Color("#D47EFF");

      for (let i = 0; i < geo.attributes.position.count; i++) {
        const y = geo.attributes.position.getY(i);
        const t = (y + wHeight / 2) / wHeight;
        let c;
        if (t < 0.33) c = colorA.clone().lerp(colorB, t / 0.33);
        else if (t < 0.66) c = colorB.clone().lerp(colorC, (t - 0.33) / 0.33);
        else c = colorC.clone().lerp(colorD, (t - 0.66) / 0.34);
        colors.push(c.r, c.g, c.b);
      }

      geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
      plane = new THREE.Mesh(geo, mat);
      sceneWave.add(plane);

      plane.rotation.x = -Math.PI / 2 - 0.2;
      plane.position.y = -25;
    }

    function animateWave() {
      requestAnimationFrame(animateWave);
      const gArray = plane.geometry.attributes.position.array;
      const time = Date.now() * 0.0002;
      for (let i = 0; i < gArray.length; i += 3) {
        gArray[i + 2] =
          simplex.noise4D(gArray[i] / conf.xyCoef, gArray[i + 1] / conf.xyCoef, time, mouse.x + mouse.y) *
          conf.zCoef;
      }
      plane.geometry.attributes.position.needsUpdate = true;

      rendererWave.render(sceneWave, cameraWave);
    }

    function updateSizeWave() {
      const container = document.querySelector(".wave-home");
      width = container.clientWidth;
      height = container.clientHeight;
      if (rendererWave && cameraWave) {
        rendererWave.setSize(width, height);
        cameraWave.aspect = width / height;
        cameraWave.updateProjectionMatrix();

        const cam = new THREE.PerspectiveCamera(cameraWave.fov, cameraWave.aspect);
        const vFOV = (cam.fov * Math.PI) / 180;
        const heightPlane = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
        const widthPlane = heightPlane * cam.aspect;
        wWidth = widthPlane;
        wHeight = heightPlane;
      }
    }

    let sceneBooks, cameraBooks, rendererBooks;
    const booksGroup = new THREE.Group();

    function initBooks() {
      const container = document.querySelector(".wave-home");
      const widthB = container.clientWidth;
      const heightB = container.clientHeight;

      sceneBooks = new THREE.Scene();
      cameraBooks = new THREE.PerspectiveCamera(35, widthB / heightB, 1, 1000);
      cameraBooks.position.set(0, 0, 10);

      rendererBooks = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      rendererBooks.setSize(widthB, heightB);
      rendererBooks.setClearColor(0x000000, 0);
      if (booksContainerRef.current) booksContainerRef.current.appendChild(rendererBooks.domElement);

      createLightsBooks();
      createBooks();
      animateBooks();

      window.addEventListener("resize", onWindowResizeBooks);
    }

    function onWindowResizeBooks() {
      const container = document.querySelector(".wave-home");
      const widthB = container.clientWidth;
      const heightB = container.clientHeight;

      if (rendererBooks && cameraBooks) {
        rendererBooks.setSize(widthB, heightB);
        cameraBooks.aspect = widthB / heightB;
        cameraBooks.updateProjectionMatrix();
      }
    }

    function createLightsBooks() {
      const hemiLight = new THREE.HemisphereLight(0xd7dddd, 0x101010, 1);
      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.position.set(10, 20, 20);
      sceneBooks.add(hemiLight, dirLight);
    }

    function CreateBook() {
      this.mesh = new THREE.Object3D();

      const geoCover = new THREE.BoxGeometry(2.4, 3, 0.05);
      const lmoCover = new THREE.BoxGeometry(0.05, 3, 0.59);
      const pprCover = new THREE.BoxGeometry(2.3, 2.8, 0.5);

      const matCover = new THREE.MeshPhongMaterial({ color: 0x475b47 });
      const matPaper = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const cover1 = new THREE.Mesh(geoCover, matCover);
      const cover2 = new THREE.Mesh(geoCover, matCover);
      const lomo = new THREE.Mesh(lmoCover, matCover);
      const paper = new THREE.Mesh(pprCover, matPaper);

      [cover1, cover2, lomo, paper].forEach(mesh => {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      });

      cover1.position.z = 0.3;
      cover2.position.z = -0.3;
      lomo.position.x = 2.4 / 2;

      this.mesh.add(cover1, cover2, lomo, paper);
    }

    function isTooClose(newObj, others, minDistance = 1.5) {
      const newPos = newObj.position;
      for (let existing of others) {
        const dx = newPos.x - existing.position.x;
        const dy = newPos.y - existing.position.y;
        const dz = newPos.z - existing.position.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < minDistance) return true;
      }
      return false;
    }

    function createBooks() {
      const placedBooks = [];
      const range = 2;

      for (let i = 0; i < 12; i++) {
        const book = new CreateBook();

        const s = 0.05 + Math.random() * 0.15;
        book.mesh.scale.set(s, s, s);

        let tries = 0;
        do {
          book.mesh.position.x = (Math.random() - 0.5) * range * 2;
          book.mesh.position.y = (Math.random() - 0.5) * range * 2;
          book.mesh.position.z = (Math.random() - 0.5) * range * 2;
          tries++;
        } while (isTooClose(book.mesh, placedBooks) && tries < 20);

        book.mesh.rotation.x = Math.random() * Math.PI * 2;
        book.mesh.rotation.y = Math.random() * Math.PI * 2;
        book.mesh.rotation.z = Math.random() * Math.PI * 2;

        TweenMax.to(book.mesh.rotation, 8 + Math.random() * 8, {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
          z: (Math.random() - 0.5) * 0.5,
          yoyo: true,
          repeat: -1,
          ease: Sine.easeInOut,
          delay: 0.05 * i,
        });

        booksGroup.add(book.mesh);
        placedBooks.push(book.mesh);
      }

      booksGroup.position.x = 4;
      booksGroup.position.y = -1;
      sceneBooks.add(booksGroup);
    }

    function animateBooks() {
      booksGroup.rotation.x -= 0.003;
      booksGroup.rotation.y -= 0.003;
      booksGroup.rotation.z -= 0.003;

      requestAnimationFrame(animateBooks);
      rendererBooks.render(sceneBooks, cameraBooks);
    }

    initBooks();

    return () => {
      window.removeEventListener("resize", updateSizeWave);
      window.removeEventListener("resize", onWindowResizeBooks);

      if (waveCanvasRef.current && rendererWave) rendererWave.dispose();
      if (booksContainerRef.current && rendererBooks) {
        booksContainerRef.current.removeChild(rendererBooks.domElement);
        rendererBooks.dispose();
      }
    };
  }, []);

  return (
    <div className="wave-home" id="home">
      <canvas ref={waveCanvasRef} className="waves-front"></canvas>
      <div className="floating-books-container" ref={booksContainerRef}></div>
      <div className="middle-text">
        <TextType 
          text={["Welcome to The Website", "Welcome to The Website"]}
          className="company-name"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
        <br />
        <SplitText
          text="Grab this opportunity to gain knowledge, skills"
          className="wave-text wave-text-dekstop"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
        <SplitText
          text=" and success at discounted prices now."
          className="wave-text wave-text-dekstop"
          delay={200}   
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
        <div className="wave-text wave-text-tab wave-text-mobile">
          Grab this opportunity to gain knowledge, skills and success at discounted prices now.
        </div>
        <p className="quote-text">
          "Innovation distinguishes between a leader and a follower. Take the first step towards success and make your vision a reality today."
        </p>
      </div>
      <div className="right-section">
        <MacBook/>
      </div>
    </div>
  );
};

export default WaveHome;
