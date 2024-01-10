
interface CategoryProps {
    params: {
        categories: string[];
    },
    searchParams?: string[]; 
}

const Category = (props: CategoryProps): JSX.Element => {

    const { params: { categories }, searchParams } = props;


    console.log(searchParams);

    return (
        <h1>Categoría dinámica: { categories }</h1>
    );
}

export default Category;
