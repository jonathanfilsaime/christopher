import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'
import Aladdin from '../images/Aladdin.jpg'
import MegaManX3 from '../images/MegaManX3.jpg'
import SonicAdventureDx from '../images/SonicAdventureDx.jpg'
import SonicTheHedgehog4Episode1 from '../images/SonicTheHedgehog4Episode1.jpg'
import SonicTheHedgehog4Episode2 from '../images/SonicTheHedgehog4Episode2.png'
import TMNTTurtlesInTime from '../images/TMNTTurtlesInTime.png'

const Games = () => (
<Container>
  <Grid relaxed columns={4}>
    <Grid.Row>
        <Grid.Column>
            <a href="https://www.youtube.com/watch?v=n1zcLPHxvU0">
                <Image src={Aladdin} style={{width: '200px', height: '250px'}} />
            </a>
        </Grid.Column>
        <Grid.Column>
            <a href="https://www.youtube.com/watch?v=rb90buApm6A" >
                <Image src={MegaManX3} style={{width: '200px', height: '250px'}} />
            </a>
        </Grid.Column>
        <Grid.Column>
            <a href="https://www.youtube.com/watch?v=98UMqA-Mjn8" >
                <Image src={TMNTTurtlesInTime} style={{width: '200px', height: '250px'}} />
            </a>
        </Grid.Column>
        <Grid.Column>
            <a href="https://www.youtube.com/watch?v=uJrbxgxOSIs" >
                <Image src={SonicAdventureDx} style={{width: '200px', height: '250px'}} />
            </a>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column>
            <a href="https://www.youtube.com/watch?v=e9qcS4BS6hY" >
                <Image src={SonicTheHedgehog4Episode1} style={{width: '200px', height: '250px'}} />
            </a>
        </Grid.Column>
        <Grid.Column>
            <a href="https://www.youtube.com/watch?v=sqa0_jKIuFA" >
                <Image src={SonicTheHedgehog4Episode2} style={{width: '200px', height: '250px'}} />
            </a>
        </Grid.Column>
        <Grid.Column>
        <Image  />
        </Grid.Column>
        <Grid.Column>
        <Image  />
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
)

export default Games