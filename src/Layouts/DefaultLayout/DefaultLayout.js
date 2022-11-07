import Header from '../Component/Header';
import Wrapper from '../Wrapper';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Wrapper>
                <div className="content">{children}</div>
            </Wrapper>
        </div>
    );
}

export default DefaultLayout;
