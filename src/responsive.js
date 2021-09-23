import { css } from 'styled-components';

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 480px){
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 764px){
            ${props}
        }
    `;
};

export const mobile2 = (props) => {
    return css`
        @media only screen and (max-width: 566px){
            ${props}
        }
    `;
};

export const tablet2 = (props) => {
    return css`
        @media only screen and (max-width: 864px){
            ${props}
        }
    `;
};

