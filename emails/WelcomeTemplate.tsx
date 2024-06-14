import { Html,Body,Container,Text,Link,Preview,Tailwind} from "@react-email/components"
import { CSSProperties } from "react"





const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview>Welcome abored!</Preview>
        <Tailwind>
          <Body className="bg-white">
              <Container>
                  <Text style={heading}>Hello {name}</Text>
                  <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
              </Container>
          </Body>
        </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: '#fff'
}

const heading: CSSProperties = {
  fontSize: '32px'
}



export default WelcomeTemplate