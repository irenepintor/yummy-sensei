import { Button, Spinner } from "@fluentui/react-components";

function minusQuantity(){

}

function plusQuantity(){

}

const ItemCount = () => {
    return (
        <>
            <Button type="button" className="" onClick={minusQuantity()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg>
            </Button>
            <div>
                <span>
                    <Spinner/>
                </span>
                <input type="number" name="" id="" />
            </div>
            <Button type="button" className="" onClick={plusQuantity()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            </Button>
        </>
    )
}
export default ItemCount;