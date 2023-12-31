import FirstComponent from './FirstComponent'
import {FifthComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourComponent from './FourComponent'
import LearningJavaScript from './LearningJavaScript'

export default function LearningComponent() {
    return (
        <div className="App">
          <FirstComponent />
          <SecondComponent></SecondComponent>
          <ThirdComponent/>
          <FourComponent/>
          <FifthComponent/>
          <LearningJavaScript/>
        </div>
      );
}