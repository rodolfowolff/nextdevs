import Header from '@components/Header'
import { Base } from '../Base'

const tecnologies = {
  title: 'Tecnologias',
  subtitle: 'asddsa',
  backgroundURL: '',
  content: {
    text: 'asddasdsa',
  },
}

const TecnologiesPage = () => {
  return (
    <Base>
      <Header {...tecnologies} />
    </Base>
  )
}

export default TecnologiesPage
