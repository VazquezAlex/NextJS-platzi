
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {

    const { children } = props;

    return (
        <main>
            <nav>Navigación de las categorías</nav>
            { children }
        </main>
    );
}

export default Layout;