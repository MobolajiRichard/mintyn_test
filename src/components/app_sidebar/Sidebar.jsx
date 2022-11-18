import './sidebar.css'
import {ReactComponent as Overview} from './icons/overview.svg'
import {ReactComponent as Wallet} from './icons/wallet.svg'
import {ReactComponent as Pending} from './icons/pending.svg'
import {ReactComponent as Cancelled} from './icons/cancelled.svg'
import {ReactComponent as Manual} from './icons/manual.svg'
import {ReactComponent as AllOrder} from './icons/allorder.svg'
import {ReactComponent as PendingOrder} from './icons/pendingorder.svg'
import {ReactComponent as CancelOrder} from './icons/cancelorder.svg'
import {ReactComponent as Profile} from './icons/profile.svg'

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <button className='sidebar__button'>
            <p>GENERATE INVOICE</p>
        </button>
        <div className='sidebar__links__container'>
            <p className='sidebar__links__title'>Main</p>
            <div className='sidebar__links'>
                <Overview/>
                <p>Overview</p>
            </div>
        </div>
        <div className='sidebar__links__container'>
            <p className='sidebar__links__title'>Payments</p>
            <div className='sidebar__links'>
                <Wallet/>
                <p>All Payments</p>
            </div>
            <div className='sidebar__links'>
                <Pending/>
                <p>Reconciled Payments</p>
            </div>
            <div className='sidebar__links'>
                <Cancelled/>
                <p>Un - Reconciled Payments</p>
            </div>
            <div className='sidebar__links'>
                <Manual/>
                <p>Manual Settlement</p>
            </div>
        </div>
        <div className='sidebar__links__container'>
            <p className='sidebar__links__title'>Orders</p>
            <div className='sidebar__links'>
                <AllOrder/>
                <p>All Orders</p>
            </div>
            <div className='sidebar__links'>
                <PendingOrder/>
                <p>Pending Orders</p>
            </div>
            <div className='sidebar__links'>
                <CancelOrder/>
                <p>Reconciled Orders</p>
            </div>
        </div>
        <div className='sidebar__links'>
            <Profile/>
            <p>Merchant Profile</p>
        </div>
    </div>
  )
}

export default Sidebar