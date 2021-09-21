import './collectionItem.styles.scss'
//interface
import {ItemsEntity} from '../../pages/shopPage/shop.data'

const CollectionItem: React.FC<ItemsEntity> = ({id, imageUrl, name, price}) => {
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
