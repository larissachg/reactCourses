import PropTypes from 'prop-types';

export const PropsApp = ({title, subtitle}) => {
   
    // console.log(props);

    return(
        <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        </>
    )
}

PropsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

//DEFAULTPROPS
PropsApp.defaultProps ={
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'Larissa',
}