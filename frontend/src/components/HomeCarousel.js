import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { colors } from "../utils/definitions"
import { CarouselContainer } from '../styles/CarouselStyles';

const slider = () => (
    <CarouselContainer >
        <AwesomeSlider bullets={false} >
            <div className='carousel__content first'>

                <div className="carousel__text">
                    <h3>Ministers Goodwill Message</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto esse, minima, exercitationem, explicabo ratione dolorem suscipit corporis sit pariatur perspiciatis!</p>
                    <p className='carousel__message_2'>Distinctio deserunt earum nostrum magni ab laboriosam placeat ullam!</p>
                </div>

            </div>
            <div className='carousel__content second'>

                <div className="carousel__text">
                    <h3>ES Goodwill Message</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto esse, minima, exercitationem, explicabo ratione dolorem suscipit corporis sit pariatur perspiciatis!</p>
                    <p className='carousel__message_2'>Distinctio deserunt earum nostrum magni ab laboriosam placeat ullam!</p>
                </div>
            </div>
        </AwesomeSlider>
    </CarouselContainer>
);

export default slider