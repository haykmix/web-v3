import styled from 'styled-components'

import machine from '../assets/mixo_machine.png'
import machine_lights from '../assets/mixo_machine_lights.png'
import machine_inside from '../assets/machine_inside.png'
import logo from '../assets/logo.png'

import { useScrollPosition } from '../hooks/useScrollPosition';
import { useEffect } from 'react';
// import { useScrollDirection } from '../hooks/useScrollDirection';

export const HomePage = () => {
  const scrollImage = useScrollPosition(500);
  const scrollText = useScrollPosition(1130);
  const scrollScreen = useScrollPosition(1600);
  const scrollScreen2 = useScrollPosition(2400);
  const scrollScreen3 = useScrollPosition(3200);


  // const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (window.scrollY < 500) window.scrollTo({
      top: 0, // Replace with the desired scroll position
      behavior: 'smooth',
    });
    if (scrollImage || scrollText || scrollScreen || scrollScreen2) {
      document.body.style.overflow = 'hidden';
    }

    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000)
  })

  return (
    <SectionWrapper>
      <SectionCover>
        <ImageLogo src={logo} />
      </SectionCover>

      <ImageProduct src={scrollImage ? scrollScreen2 ? machine_inside : machine_lights : machine} scroll={scrollImage} scroll2={scrollScreen} scroll3={scrollScreen3}/>

      <SectionText>
        <ScrollLeftText location={scrollImage}>
          <Title>Introduction</Title>
          <Text>Where Technology Meets Impeccable Design to Craft the Perfect Long Alcoholic Drink Experience</Text>
          <Text>Mixo is the first machine that serves long alcoholic drinks and soft drinks</Text>
          <Text>Experimenta la nueva forma de servir bebidas...</Text>
        </ScrollLeftText>
        <ScrollRightText location={scrollText} top={43}>
          <Title>Introduction</Title>
          <Text>Revolutionizing the Beverage Industry with Innovation and Imagination</Text>
        </ScrollRightText>
        <ScrollLeftText location={scrollScreen}>
          <Title>Introduction</Title>
          <Text>Revolutionizing the Beverage Industry with Innovation and Imagination</Text>
        </ScrollLeftText>
        <ScrollSmallRightText location={scrollScreen} top={65}>
          <Title size={40}>Fully Integrated Alcohol System</Title>
          <Text size={20}>A Fusion of Precision Engineering and Aesthetically Stunning LED Innovation, Delivering Not Just Exceptional Mixology, but an Entirely Immersive, Technologically Advanced Drinking Experience</Text>
        </ScrollSmallRightText>
        <ScrollSmallLeftText location={scrollScreen} top={85}>
          <Title size={40}>32" Touchable Display </Title>
          <Text size={20}>Featuring a 32-Inch Touchable Display Allowing the Experience Unparalleled Control and Immersive Interactivity in Crafting Your Perfect Drink</Text>
        </ScrollSmallLeftText>
        <ScrollSmallRightText location={scrollScreen2} top={130}>
          <Title size={40}>
            <h1 style={{ margin: 0 }}>
              2
            </h1>
            Ice System
          </Title>
          <Text size={20}>A Fusion of Precision Engineering and Aesthetically Stunning LED Innovation, Delivering Not Just Exceptional Mixology, but an Entirely Immersive, Technologically Advanced Drinking Experience</Text>
        </ScrollSmallRightText>
        <ScrollSmallLeftText location={scrollScreen2} top={115}>
          <Title size={40}>
            <h1 style={{ margin: 0 }}>
              1
            </h1>
            Alcohol System</Title>
          <Text size={20}>Featuring a 32-Inch Touchable Display Allowing the Experience Unparalleled Control and Immersive Interactivity in Crafting Your Perfect Drink</Text>
        </ScrollSmallLeftText>
        <ScrollSmallRightText location={scrollScreen3} top={160}>
          <Title size={40}>
            <h1 style={{ margin: 0 }}>
              3
            </h1>
            Cup Serving System
          </Title>
          <Text size={20}>A Fusion of Precision Engineering and Aesthetically Stunning LED Innovation, Delivering Not Just Exceptional Mixology, but an Entirely Immersive, Technologically Advanced Drinking Experience</Text>
        </ScrollSmallRightText>
        <ScrollSmallLeftText location={scrollScreen3} top={180}>
          <Title size={40}>
            <h1 style={{ margin: 0 }}>
              4
            </h1>
            Serving System</Title>
          <Text size={20}>Featuring a 32-Inch Touchable Display Allowing the Experience Unparalleled Control and Immersive Interactivity in Crafting Your Perfect Drink</Text>
        </ScrollSmallLeftText>
      </SectionText>
    </SectionWrapper>
  )

}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 200px;
`

const SectionCover = styled.section`
  margin-top: 65%;
`

const ImageLogo = styled.img`
  width: 450px;
`

const ImageProduct = styled.img<{ scroll: boolean, scroll2: boolean, scroll3: boolean }>`
  width: ${props => props.scroll ? props.scroll2 ? 570 : 370 : 300}px;
  top: ${props => props.scroll ? props.scroll3 ? -350 : 30 : 600}px;
  transition: all 0.5s ease-in-out;
  position: fixed;
`

const SectionText = styled.section`
  position: relative;
`

const ScrollLeftText = styled.div<{ location: boolean }>`
  position: absolute;
  width: 25rem;
  text-align: left;
  top: -5rem;
  right: ${props => props.location ? '250' : '800'}px;
  transition: all 0.5s ease-in-out;
`

const ScrollSmallLeftText = styled.div<{ location: boolean, top: number }>`
  position: absolute;
  width: 22rem;
  text-align: left;
  top: ${props => props.top}rem;
  right: ${props => props.location ? '340' : '800'}px;
  transition: all 0.5s ease-in-out;
`

const ScrollRightText = styled.div<{ location: boolean, top: number }>`
  position: absolute;
  width: 25rem;
  text-align: right;
  top: ${props => props.top}rem;
  left: ${props => props.location ? '250' : '800'}px;
  transition: all 0.5s ease-in-out;
`

const ScrollSmallRightText = styled.div<{ location: boolean, top: number }>`
  position: absolute;
  width: 22rem;
  text-align: right;
  top: ${props => props.top}rem;
  left: ${props => props.location ? '340' : '800'}px;
  transition: all 0.5s ease-in-out;
`

const Title = styled.div<{ size?: number }>`
  font-size: ${props => props.size ? props.size : 60}px;
  font-weight: 600;
`

const Text = styled.h1<{ size?: number }>`
  font-size: ${props => props.size ? props.size : 25}px;
  font-weight: 400;
  line-height: 25px;
`
