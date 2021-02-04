import React from 'react'
import Logo from './svg/Logo'
import { COLORS } from '../lib/constants'

const Header = ({ enableHeroText }) => (
  <header role="banner" className="mb4">
    <div className="header-content">
      <a id="link-home" href="/" aria-label="Home">
        {/* <Logo /> */}
        <span className="code">Code.</span>
        devtool.tech
      </a>
      {enableHeroText ? (
        <h2 className="mt3">
          分享奇妙代码，将从这里启程
          <br />
        </h2>
      ) : null}
    </div>
    <style jsx>
      {`
        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-content a {
          height: 64px;
          max-width: 96vw;
          font-family: 'Berkshire Swash', cursive;
          font-size: 3rem;
        }

        .code {
          color: ${COLORS.PRIMARY};
          font-size: 4rem;
        }

        h2 {
          text-align: center;
        }

        @media (max-width: 768px) {
          header {
            margin-bottom: var(--x3);
          }
          h2 {
            font-size: 13px;
          }
        }
      `}
    </style>
  </header>
)

export default Header
