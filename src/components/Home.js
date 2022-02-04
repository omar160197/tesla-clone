import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                describtion="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Model Y"
                describtion="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Model 3"
                describtion="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Model X"
                describtion="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftbtn="Custom Order"
                rightbtn="Existing Inventory"
            />
            <Section
                title="Solar Panels"
                describtion="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftbtn="Order Now"
                rightbtn="Learn More"
            />
            <Section
                title="Solar Roof"
                describtion="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftbtn="Order Now"
                rightbtn="Learn More"
            />
            <Section
                title="Accessories"
                describtion=""
                backgroundImg="accessories.jpg"
                leftbtn="Order Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`