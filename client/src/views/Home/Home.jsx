import React,{useState,useEffect} from "react";
import Cards from '../../components/Cards/Cards'
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, orderRecipes, getDiets, filterRecipes, filterBdPi, getAllRecipes} from "../../redux/actions";
import style from './Home.module.css'

const Home = ()=>{  

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    
    useEffect(()=>{
        try {
            dispatch(getDiets())
            dispatch(getRecipes())            
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("Ocurrió un error en la solicitud. Por favor, intenta nuevamente.");
            }
        }
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

    const onChangeOrderDbApi = (event)=>{
        dispatch(filterBdPi(event.target.value))
    }

    const onClickAll = ()=>{
        try {
            dispatch(getAllRecipes())
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("Ocurrió un error en la solicitud. Por favor, intenta nuevamente.");
            }
        }
    }

    return(
        <div>
            <div className={style.selectsContainer}>
                <div className={style.selectContainer}>
                    <label htmlFor="">Type of diet</label>
                    <br />
                    <select className={style.select} name="" id="" onChange={onChangeFilter}>
                        <option value="">Select...</option>
                        {diets?.map((diet)=>{
                            return <option key={diet.id} value={diet.name}>{diet.name}</option>
                        })}
                    </select>    
                </div>
                <div className={style.selectContainer}>
                    <label htmlFor="">Order</label>
                    <br />
                    <select className={style.select} name="" id="" onChange={onChangeOrder}>
                        <option value="">Select...</option>
                        <option value="A">Ascending Health Score</option>
                        <option value="D">Descending Health Score</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
                <div className={style.selectContainer}>
                    <label htmlFor="">Filter by DB or API</label>
                    <br />
                    <select className={style.select} name="" id="" onChange={onChangeOrderDbApi}>
                        <option value="">Select...</option>

                        <option value="api">API</option>
                        <option value="db">DB</option>
                    </select>
                </div>
                <button className={style.button} onClick={onClickAll}>All</button>
            </div>
            <h1>Recipes</h1>
            <Pagination recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate} page={currentPage}/>
            <Cards recipes={currentRecipes}/>
            <Pagination recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate} page={currentPage}/>
        </div>
    )
}

export default Home