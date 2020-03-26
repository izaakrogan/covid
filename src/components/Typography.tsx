import styled, { css } from 'styled-components';
import colors from '../style/colors';

interface IProps {
  mods?: Array<string | number>;
  mobileMods?: Array<string | number>;
}

const P = styled.p`
  font-size: 1.8em;
  line-height: 1.6;
  font-family: 'Lexend';
  color: ${colors.brown};
  ${props =>
    props.mods &&
    modifiers(props.mods)} @media
    only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;

const P1 = styled.p`
  font-size: 1.4em;
  line-height: 1.6;
  font-family: 'Lexend';
  color: ${colors.brown};
  ${props =>
    props.mods &&
    modifiers(props.mods)} @media
    only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;

const P2 = styled.p`
  font-size: 1em;
  line-height: 1.4;
  font-family: 'Lexend';
  color: ${colors.brown};
  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
  }
  ${props => props.mods && modifiers(props.mods)}
  @media only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;

const P3 = styled.p`
  font-size: 0.6em;
  line-height: 1.4;
  font-family: 'Lexend';
  color: ${colors.brown};
  ${props =>
    props.mods &&
    modifiers(props.mods)} @media
    only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;

const H1 = styled.h1`
  font-size: 3.5em;
  font-family: 'abril-Fatface';
  color: ${colors.brown};
  line-height: 1.25;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 2.2em;
  }
  ${(props: IProps) => props.mods && modifiers(props.mods)}
  @media only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;

const H2 = styled.h2`
  font-size: 3em;
  font-family: 'abril-Fatface';
  color: ${colors.brown};
  line-height: 1.25;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 3em;
  }
  ${(props: IProps) => props.mods && modifiers(props.mods)}
  @media only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;

const H3 = styled.h3`
  font-size: 2em;
  font-family: 'abril-Fatface';
  color: ${colors.brown};
  line-height: 1.25;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 2.6em;
  }
  ${(props: IProps) => props.mods && modifiers(props.mods)}
  @media only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;
const H4 = styled.h4`
  font-size: 1.2em;
  font-family: 'abril-Fatface';
  color: ${colors.brown};
  line-height: 1.25;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 2.6em;
  }
  ${(props: IProps) => props.mods && modifiers(props.mods)}
  @media only screen and (max-width: 768px) {
    ${(props: IProps) => props.mobileMods && modifiers(props.mobileMods)}
  }
`;

function modifiers(arr: any) {
  let str = ``;

  arr.forEach((mod: string | number) => {
    // adjust font size with any number
    if (typeof mod === 'number') {
      str += `font-size: ${mod / 10}em;`;
      return;
    }

    if (mod === 'center') {
      str += 'text-align: center;';
      return;
    }

    if (mod === 'left') {
      str += 'text-align: left;';
      return;
    }

    if (mod === 'right') {
      str += 'text-align: right;';
      return;
    }

    if (mod === 'error') {
      str += `
        color: #ea534f;
        font-size: 16px;
      `;
      return;
    }

    if (mod === 'fade') {
      str += `
        opacity: 0.6;
      `;
      return;
    }

    if (mod === 'bold') {
      str += 'font-weight: bold;';
      return;
    }

    if (mod === 'regular') {
      str += 'font-weight: regular;';
      return;
    }

    if (mod === 'caps') {
      str += 'text-transform: uppercase;';
      return;
    }

    if (mod === 'spaced') {
      str += 'letter-spacing: 2px;';
      return;
    }

    if (mod === 'spaced1') {
      str += 'letter-spacing: 1px;';
      return;
    }

    if (mod === 'spaced0') {
      str += 'letter-spacing: default;';
      return;
    }

    if (mod === 'hover') {
      str += `&:hover {
        cursor: pointer;
      }`;
      return;
    }

    if (mod === 'link') {
      str += `
        text-decoration: underline;
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
      `;
      return;
    }

    throw Error(`Unknown modifier '${mod}' passed to Typography.js`);
  });

  return css`
    ${str}
  `;
}

export const T = {
  P,
  P1,
  P2,
  P3,
  H1,
  H2,
  H3,
  H4,
};

export default T;
