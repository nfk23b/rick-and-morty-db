import Header from "./header/header";

const layoutStyle = {
    width: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
};

export default function Layout(props) {
    return (
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>
    );
}
