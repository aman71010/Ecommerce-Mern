import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: lime;
    position: relative;
`;

const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: .6;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`

`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction = "left">
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
                <Slide></Slide>
            </Wrapper>
            <Arrow direction = "right">
                <ArrowRightOutlinedIcon />
            </Arrow>
            
            
        </Container>
    )
}

export default Slider;
