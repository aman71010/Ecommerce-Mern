import { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import { sliderItems } from "../data.js";
import { tablet, mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({height: "120vh"})};
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
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
    opacity: .5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(-${(props) => props.slideIndex *100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
    ${mobile({height: "100%", flexDirection: "column"})};
`;

const ImgContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({height: "50%"})};
`;

const Image = styled.img`
    width: 90%;
    height: auto;
    ${mobile({width: "auto", height: "100%"})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${tablet({padding: "30px"})};
`;

const Title = styled.h1`
    font-size: 65px;
    ${tablet({fontSize : "40px"})};
    ${mobile({textAlign: "center"})};
    
`;

const Description = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin: 40px 0;
    letter-spacing: 3px;
    ${tablet({margin: "20px 0", letterSpacing: "2px"})};
    ${mobile({margin: "18px 0", fontSize: "18px"})};
    
`;

const Button = styled.button`
    background: transparent;
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
    ${mobile({padding: "5px", fontSize: "18px", width: "100%"})};
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0);
        }
    };

    return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} alt="slide-img-1"></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow> 
        </Container>
    )
}

export default Slider;
