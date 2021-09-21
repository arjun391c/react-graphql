import './shopPage.styles.scss'
import { useState } from "react"
//data and interface
import {ICollections, shopData} from './shop.data'  
//componetns
import CollectionsPreview from '../../components/collectionPreview/CollectionPreview'

const ShopPage: React.FC = () => {
    const [collections, setCollections] = useState<ICollections[]>([...shopData])

    return (
        <div className="shop-page">
            {collections.map((collection) => (
                <CollectionsPreview key={collection.id} {...collection}/>
            ))}
        </div>
    )
}

export default ShopPage
