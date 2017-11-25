import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDay, clearSuggestions, suggestResortNames} from '../../actions'

const mapStateToProps = (state, props) => ({
    fetching: state.resortNames.fetching,
    suggestions: state.resortNames.suggestions,
    router: props.router
})

const mapDispatchToProps = (dispatch) => ({
    // onNewDay(day){
    //     dispatch(
    //         addDay(day.resort, day.date, day.powder, day.backcountry)
    //     )
    // },

    // or use the short hand for above syntax
    onNewDay({resort, date, powder, backcountry}){
        dispatch(
            addDay(resort, date, powder, backcountry)
        )
    },

    onChange(value){
        if(value){
            dispatch(suggestResortNames(value))
        }
        else{
            dispatch(clearSuggestions())
        }
    },

    onClear(){
        dispatch(
            clearSuggestions()
        )
    }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)
export default withRouter(Container)

// export default withRouter(
//     (props) => 
//         <AddDayForm suggestions={[]} 
//                 fetching={false} 
//                 router={props.router} 
//                 onNewDay={day => console.log('todo: add day', day)}
//                 onChange={value => console.log('todo: suggest', value)}
//                 onClear={() => console.log('todo: clear suggestions')} />
// )