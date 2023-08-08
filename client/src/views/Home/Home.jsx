import React,{useState,useEffect} from "react";
import Cards from '../../components/Cards/Cards'
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, orderRecipes, getDiets, filterRecipes} from "../../redux/actions";

const Home = ()=>{  

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    
    useEffect(()=>{
        dispatch(getRecipes())
        dispatch(getDiets())
    },[])

    const numberOfLastPage = currentPage * recipesPerPage;
    const numberOfFirstPage = numberOfLastPage - recipesPerPage;
    const currentRecipes = recipes.slice(numberOfFirstPage, numberOfLastPage)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const onChangeOrder = (event) =>{
        dispatch(orderRecipes(event.target.value))
    }

    const onChangeFilter = (event)=>{
        dispatch(filterRecipes(event.target.value))
    }

    return(
        <div>
            <div>
                <div>
                    <label htmlFor="">Tipo de dieta</label>
                    <br />
                    <select name="" id="" onChange={onChangeFilter}>
                        <option value="">Seleccionar</option>
                        {diets?.map((diet)=>{
                            return <option key={diet.id} value={diet.name}>{diet.name}</option>
                        })}
                    </select>    
                </div>
                <div>
                    <label htmlFor="">Ordenar</label>
                    <br />
                    <select name="" id="" onChange={onChangeOrder}>
                        <option value="">Seleccionar</option>
                        <option value="A">Health Score Ascendente</option>
                        <option value="D">Health Score Descendente</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
            </div>
            <h1>Recipes</h1>
            <Cards recipes={currentRecipes}/>
            <Pagination recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate} page={currentPage}/>
        </div>
    )
}

export default Home