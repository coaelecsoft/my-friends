import data from './data.json'
import './articles.scss'
import Article from './article'
function Articles() {

    return (
        <ul className="flex-articles">
            {data.map(art =>
                <Article title={art.title} description={art.description} picture={art.picture} />
                    )}
        </ul>
            
    )

}
export default Articles