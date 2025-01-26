import s from './LoadMoreBtn.module.css'

export default function LoadMoreBtn ({handleLoadMore}){

    return(
        <div className={s.containerBtn}>
            <button className={s.btn} onClick={handleLoadMore}> Load more</button>
        </div>
    )

}