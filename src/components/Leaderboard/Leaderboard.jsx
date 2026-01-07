import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Leaderboard.css";
import AnimatedText from "../AnimatedText/AnimatedText";

const achievers = [
  { rank: 1, name: "Raghav", school: "SIS , Pune", score: 1600 },
  { rank: 2, name: "Anoushka", school: "TISB , Bengaluru", score: 1580 },
  { rank: 3, name: "Arav", school: "DAIS , Mumbai", score: 1580 },
  { rank: 4, name: "Madhav", school: "UWCSEA , Singapore", score: 1580 },
  { rank: 5, name: "Parth", school: "Hill Spring , Mumbai", score: 1580 },
  { rank: 6, name: "Atishaya", school: "DAIS , Mumbai", score: 1570 },
  { rank: 7, name: "Aradhya", school: "NMS , Jaipur", score: 1560 },
  { rank: 8, name: "Abeer", school: "Brookes Intl, Moscow , Russia", score: 1560 },
  { rank: 9, name: "Mihir", school: "Jumeirah College , Dubai", score: 1560 },
  { rank: 10, name: "Sidharth", school: "DPS , Bengaluru", score: 1560 },
  { rank: 11, name: "Shivam", school: "NMS , Jaipur", score: 1560 },
  { rank: 12, name: "Ahsash", school: "JPIS , Jaipur", score: 1550 },
  { rank: 13, name: "Arjun", school: "SIS , Mumbai", score: 1550 }
];

export default function Leaderboard() {
  const evens = achievers.filter(a => a.rank > 1 && a.rank % 2 === 0);
  const odds = achievers.filter(a => a.rank > 1 && a.rank % 2 === 1);

  const getAvatarSrc = (rank) => {
    if ([2, 6, 7].includes(rank)) {
      return "https://lottie.host/cd22b1f3-55fc-4d27-b91a-4bb55da64d34/4r9g7dOxUC.lottie";
    }
    return "https://lottie.host/f2ffc4a9-3e7d-4eee-95f7-4aeaac63e5da/y0dA0Bl62z.lottie";
  };

  return (
    <div className="leaderboard-container" id="our-achievers">
      <AnimatedText text="OUR ACHIEVERS" />

      <div className="desktop-view">
        <div className="leaderboard-grid">
          <div className="left-col">
            <div className="top-card">
              <div className="strap">1st Rank</div>
              <div className="avatar large">
                <DotLottieReact src={getAvatarSrc(1)} loop autoplay />
              </div>
              <div className="name">{achievers[0].name}</div>
              <div className="school">{achievers[0].school}</div>
              <div className="score-box">{achievers[0].score}</div>
            </div>
          </div>
          <div className="middle-col">
            {evens.map(a => (
              <div key={a.rank} className="achiever-card">
                <div className="rank">{a.rank}</div>
                <div className="avatar">
                  <DotLottieReact src={getAvatarSrc(a.rank)} loop autoplay />
                </div>
                <div className="achiever-info">
                  <h4>{a.name}</h4>
                  <p>{a.school}</p>
                </div>
                <div className="score-box">{a.score}</div>
              </div>
            ))}
          </div>
          <div className="right-col">
            {odds.map(a => (
              <div key={a.rank} className="achiever-card">
                <div className="rank">{a.rank}</div>
                <div className="avatar">
                  <DotLottieReact src={getAvatarSrc(a.rank)} loop autoplay />
                </div>
                <div className="achiever-info">
                  <h4>{a.name}</h4>
                  <p>{a.school}</p>
                </div>
                <div className="score-box">{a.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile-view" aria-hidden="true">
        {achievers.map(a => (
          <div
            key={a.rank}
            className={a.rank === 1 ? "top-card mobile-top" : "achiever-card mobile-item"}
          >
            {a.rank === 1 ? <div className="strap">1st Rank</div> : <div className="rank">{a.rank}</div>}
            <div className={a.rank === 1 ? "avatar large" : "avatar"}>
              <DotLottieReact src={getAvatarSrc(a.rank)} loop autoplay />
            </div>
            <div className={a.rank === 1 ? "mobile-top-info" : "achiever-info"}>
              {a.rank === 1 ? (
                <>
                  <div className="name">{a.name}</div>
                  <div className="school">{a.school}</div>
                </>
              ) : (
                <>
                  <h4>{a.name}</h4>
                  <p>{a.school}</p>
                </>
              )}
            </div>
            <div className="score-box">{a.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
