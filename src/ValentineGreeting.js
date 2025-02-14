import React, { useState, useEffect } from 'react';
import './ValentineGreeting.css';

const ValentineGreeting = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    english: {
      title: "Happy Valentine's Day!",
      message: "Wishing you a day filled with love and happiness",
      subtitle: "You make my heart smile",
      button: "Send Love ❤️"
    },
    thai: {
      title: "สุขสันต์วันวาเลนไทน์",
      message: "ขอให้วันนี้เป็นวันที่เต็มไปด้วยความรักและความสุข",
      subtitle: "คุณทำให้หัวใจฉันยิ้ม",
      button: "ส่งความรัก ❤️"
    }
  };

  const currentLanguage = isEnglish ? content.english : content.thai;

  return (
    <div className="valentine-container">
      <div className={`background-hearts ${isVisible ? 'visible' : ''}`}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="heart-bg" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}>❤️</div>
        ))}
      </div>

      <div className="language-switch">
        <button onClick={() => setIsEnglish(!isEnglish)}>
          {isEnglish ? '🇹🇭 ภาษาไทย' : '🇬🇧 English'}
        </button>
      </div>

      <div className={`valentine-card ${isVisible ? 'visible' : ''}`}>
        <div className="card-content">
          <div className="header-hearts">
            <span>💖</span>
            <span>💝</span>
            <span>💖</span>
          </div>
          
          <h1 className="title">{currentLanguage.title}</h1>
          
          <div className="message-container">
            <p className="message">{currentLanguage.message}</p>
            <p className="subtitle">{currentLanguage.subtitle}</p>
          </div>

          <button className="love-button">
            {currentLanguage.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValentineGreeting; 