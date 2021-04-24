import React from 'react';
import styled from 'styled-components';


const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>
                        GET ALL THERE
                    </SignUp>
                    <Description>
                        Get Premier Access to Raya and the last dragon for an additional fee with a Disney+ subscription. As of {} the price of Disney+ and the Disney Bundle will increse by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const CTALogoTwo = styled.img`
    max-width: 650px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

const Description = styled.p`
    color: #f9f9f9;
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px; 
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`


const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 650px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const BgImage = styled.div`
    background-position: top;
    background-image : url('/images/login-background.jpg');
    background-size: cover;
    height: 100%;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
    background-repeat: no-repeat;
`

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom : 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

export default Login