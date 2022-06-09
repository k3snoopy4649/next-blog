import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>ページが見つかりません。</p>
            <Link to="/">トップに戻る</Link>
        </div>
     );
}
 
export default NotFound;