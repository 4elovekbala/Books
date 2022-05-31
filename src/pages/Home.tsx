import Search from "../components/Search/Search";
import { Container } from '@mui/material';

const Hero = () => {
   return (
      <>
         <Container maxWidth="lg" sx={{
            marginTop : 10,
         }}>
            <Search />
         </Container>
      </>
   )
}

export default Hero;