import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import './css/MainPage.css'

export default function MainPage(): JSX.Element {
  useEffect(() => {
    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
      option.addEventListener('click', () => {
        options.forEach((el) => {
          el.classList.remove('active');
        });
        option.classList.add('active');
      });
    });
  }, []);
  return (
    <Container className="mainContainer">
      <div className="options">
        <div className="option active img1">
          <div className="label">
            <div className="icon">
              <i className="fas fa-solid fa-martini-glass-citrus" />
            </div>
            <div className="info">
              <div className="main">Ultricies</div>
              <div className="sub">Elit ut aliquam purus sit</div>
            </div>
          </div>
        </div>
        <div className="option img2">
          <div className="label">
            <div className="icon">
              <i className="fas fa-walking" />
            </div>
            <div className="info">
              <div className="main">Luctus</div>
              <div className="sub">Arcu cursus vitae congue mauris</div>
            </div>
          </div>
        </div>

        <div className="option img3">
          <div className="label">
            <div className="icon">
              <i className="fas fa-solid fa-beer-mug-empty" />
            </div>
            <div className="info">
              <div className="main">МАША Я ТУТЬ!</div>
              <div className="sub">Elit ut aliquam purus sit</div>
            </div>
          </div>
        </div>
        <div className="option img4">
          <div className="label">
            <div className="icon">
              <i className="fas fa-solid fa-mug-hot" />
            </div>
            <div className="info">
              <div className="main">Ultricies</div>
              <div className="sub">Elit ut aliquam purus sit</div>
            </div>
          </div>
        </div>
        <div className="option img5">
          <div className="label">
            <div className="icon">
              <i className="fas fa-solid fa-palette" />
            </div>
            <div className="info">
              <div className="main">Ultricies</div>
              <div className="sub">Elit ut aliquam purus sit</div>
            </div>
          </div>
        </div>
      </div>

      <div className="btmMainContainer">
        <a href="/locations">
          <button type="button" className="btmMain">
            Локации
          </button>
        </a>

        <a href="/themepage">
          <button type="button" className="btmMain">
            Квесты
          </button>
        </a>
      </div>
    </Container>
  );
}
