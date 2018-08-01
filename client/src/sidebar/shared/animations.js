import styled, { keyframes } from 'styled-components';

const scale = keyframes`
0% {
 transition: all 200ms ease-in;
 transform: scale(0);
}

100% {
 transition: all 200ms ease-in;
   transform: scale(1);
}
`;

export const ScaleIn = styled.div`
 animation: ${scale} 0.4s 0s backwards;
 width:100%;
 `;