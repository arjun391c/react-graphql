import './collectionPreview.styles.scss'
//interface
import {ICollections} from '../../pages/shopPage/shop.data'
//components
import CollectionItem from '../collectionItem/CollectionItem'

const CollectionPreview: React.FC<ICollections> = ({title, items}) => {
    
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items?.filter((_, i) => i < 4)
                  .map((item) => (
                    <CollectionItem key={item.id} {...item}/> 
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview
