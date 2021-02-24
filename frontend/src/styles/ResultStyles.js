import styled from 'styled-components'
import { TestPaneContainer } from "./TestSubjectStyles"
import { device, colors, defaultMargin } from '../utils/definitions'

export const ResultOverviewItem = styled(TestPaneContainer)`
    .container{
        width: 100%;
    }
    .options{
        width: 100%;
       p{
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding: 10px 20px;
           font-weight: 500;
       }
       .incorrect, .none{
           color: ${colors.white}
       }
    }

`

export const ResultOverviewContainer = styled.div`
    margin-top: calc(${defaultMargin} + 20px);
    display: grid;
    place-items: center;

`