import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row' id='rows'>
          <div className="col-md-4">
            <div className='small-box'><div className='price-category'>FREE</div>
              <span className='rate'>$0</span><span>/month</span>
              <hr />
              <div><i class="fa fa-check eligibility"> Single user</i></div>
              <div><i class="fa fa-check eligibility"> 5GB Storage</i></div>
              <div><i class="fa fa-check eligibility"> Unlimited Public Projects</i></div>
              <div><i class="fa fa-check eligibility"> Single user</i></div>
              <div><i class="fa fa-check eligibility"> Community Access</i></div>
              <div><i class="fa fa-times not-eligible"> Unlimited Private Projects</i></div>
              <div><i class="fa fa-times not-eligible"> Dedicated Phone Support</i></div>
              <div><i class="fa fa-times not-eligible"> Free Sub Domain</i></div>
              <div><i class="fa fa-times not-eligible"> Monthly Status Reports</i></div>
              <a href="#" class="btn btn-primary text-uppercase">button</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className='small-box'><div className='price-category'>FREE</div>
              <span className='rate'>$9</span><span>/month</span>
              <hr />
              <div><i class="fa fa-check eligibility"><b> 5 user</b></i></div>
              <div><i class="fa fa-check eligibility"> 5GB Storage</i></div>
              <div><i class="fa fa-check eligibility"> Unlimited Public Projects</i></div>
              <div><i class="fa fa-check eligibility"> Single user</i></div>
              <div><i class="fa fa-check eligibility"> Community Access</i></div>
              <div><i class="fa fa-check eligibility"> Unlimited Private Projects</i></div>
              <div><i class="fa fa-check eligibility"> Dedicated Phone Support</i></div>
              <div><i class="fa fa-check eligibility"> Free Sub Domain</i></div>
              <div><i class="fa fa-times not-eligible"> Monthly Status Reports</i></div>
              <a href="#" class="btn btn-primary text-uppercase">button</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className='small-box'><div className='price-category'>FREE</div>
              <span className='rate'>$49</span><span>/month</span>
              <hr />
              <div><i class="fa fa-check eligibility"><b> Unlimited user</b></i></div>
              <div><i class="fa fa-check eligibility"> 5GB Storage</i></div>
              <div><i class="fa fa-check eligibility"> Unlimited Public Projects</i></div>
              <div><i class="fa fa-check eligibility"> Single user</i></div>
              <div><i class="fa fa-check eligibility"> Community Access</i></div>
              <div><i class="fa fa-times eligibility"> Unlimited Private Projects</i></div>
              <div><i class="fa fa-times eligibility"> Dedicated Phone Support</i></div>
              <div><i class="fa fa-times eligibility"> Free Sub Domain</i></div>
              <div><i class="fa fa-times eligibility"> Monthly Status Reports</i></div>
              <a href="#" class="btn btn-primary text-uppercase">button</a> </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
