import s from './LoadMoreBtn.module.css'

export default function LoadMoreBtn ({pagePlus}){

    return (
        <div className={s.containerBtn}>
            <button className={s.btn} onClick={pagePlus}>Load more</button>
        </div>
    )

}