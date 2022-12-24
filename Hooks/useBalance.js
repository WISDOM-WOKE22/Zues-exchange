import { useCollection } from "./UseCollection";
import { useState, useEffect, useRef } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useBalance() {
    const { user } =  useAuthContext()
    const [ btcPrice, setBtcPrice ] = useState('')
    const [ mainBalance, setMainBalance ] = useState('0.00')
    const { documents } = useCollection(
      'Transactions',
      ['uid',"==",user.uid]
    )
     const document = useRef(documents).current
    let balance 
    let TotalWithdrawal 
    let TotalDeposite 
    let TotalPending 
    let Withdraw 
    let Deposite
    let Bitcoin = '0'
    let btc
    let Ethereum = '0'
    let eth
    let Binance = '0'
    let bnb
    let Usdt = '0'
    let usdt
    let Shiba = '0'
    let shib
    let Tron = '0'
    let trx
    // ////////
    let Dbitcoin = 0
    let Wbitcoin = 0
    let bbitcoin
    let wbitcoin
    // ////////
    let Dethereum = 0
    let Wethereum = 0
    let dethereum
    let wethereum
    // ////////
    let Dbinance = 0
    let Wbinance = 0
    let dbinance
    let wbinance
    // ////////
    let Dusdt = 0
    let Wusdt = 0
    let dusdt
    let wusdt
    // ////////
    let Dshib = 0
    let Wshib = 0
    let dshib
    let wshib
    // ////////
    let Dtron = 0
    let Wtron = 0
    let dtron
    let wtron



    if(Array.isArray(documents) == true && documents.length !== 0  ){
      balance = documents.map( transaction => +(transaction.amount))
      .reduce((acc, amount) => ((acc += amount)))
    }
      if(Array.isArray(documents) == true && documents.length !== 0 ){
         Withdraw = documents.filter((transaction) => transaction.type == 'withdraw')
         if(Withdraw.length !== 0){
           TotalWithdrawal = documents.filter((transaction) => transaction.type == 'withdraw')
           .map(transaction => +(transaction.amount))
           .reduce((acct, amount) => ((acct += amount)))
         }
         if(Withdraw.length == 0 ){
          TotalWithdrawal = 0
         }
      }
      if(Array.isArray(documents) == true && documents.length !== 0 ){
         Deposite = documents.filter((transaction) => transaction.type == 'deposite')
         if(Deposite.length !== 0){
           TotalDeposite = documents.filter((transaction) => transaction.type == 'deposite')
           .map(transaction => +(transaction.amount))
           .reduce((acct, amount) => ((acct += amount)))
         }
      }
      if(Array.isArray(documents) == true && documents.length !== 0){
          btc = documents.filter((transaction) => transaction.pair == "BTC" )
          if(btc.length !== 0){
            bbitcoin = documents.filter((transaction) => transaction.pair == 'BTC')
            .filter((transaction) => transaction.type == 'deposite')
            if( bbitcoin.length !== 0 ){
              Dbitcoin = bbitcoin.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
            }else{
              Dbitcoin = 0
            }
            wbitcoin = documents.filter((transaction) => transaction.pair == 'BTC')
            .filter((transaction) => transaction.type == 'withdraw')
            if( wbitcoin.length !== 0 ){
              Wbitcoin = wbitcoin.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
            } else{
              Wbitcoin = 0
            }
          }
          Bitcoin = +(Dbitcoin) - (+Wbitcoin)
      }
      if(Array.isArray(documents) == true && documents.length !== 0){
          eth = documents.filter((transaction) => transaction.pair == "ETH" )
          if(eth.length !== 0){
             dethereum = documents.filter((transaction) => transaction.pair == 'ETH')
             .filter((transaction) => transaction.type == 'deposite')
             if(dethereum.length !== 0){
              Dethereum = dethereum.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
             } else{
              Dethereum = 0
             }
             wethereum = documents.filter((transaction) => transaction.pair == 'ETH')
             .filter((transaction) => transaction.type == 'withdraw')
             if(wethereum.length !== 0){
               Wethereum = wethereum.map(transaction => +(transaction.amount))
               .reduce((acct, amount) => ((acct += amount)))
             } else {
              Wethereum = 0
             }
          }
          Ethereum = +(Dethereum) - +(Wethereum)
      }
      if(Array.isArray(documents) == true && documents.length !== 0){
          bnb = documents.filter((transaction) => transaction.pair == "BNB" )
          if(bnb.length !== 0){
             dbinance = documents.filter((transaction) => transaction.pair == 'BNB')
             .filter((transaction) => transaction.type == 'deposite')
             if(dbinance.length !== 0) {
               Dbinance = dbinance.map(transaction => +(transaction.amount))
               .reduce((acct, amount) => ((acct += amount)))
             }
             wbinance = documents.filter((transaction) => transaction.pair == 'BNB')
             .filter((transaction) => transaction.type == 'withdraw')
             if(wbinance.length !== 0) {
               Wbinance = wbinance.map(transaction => +(transaction.amount))
               .reduce((acct, amount) => ((acct += amount)))
             } else{
              Wbinance = 0
             }
          }
          Binance = +(Dbinance) - +(Wbinance)
      }
      if(Array.isArray(documents) == true && documents.length !== 0){
          usdt = documents.filter((transaction) => transaction.pair == "USDT" )
          if(usdt.length !== 0){
             dusdt = documents.filter((transaction) => transaction.pair == 'USDT')
             .filter((transaction) => transaction.type == 'deposite')
             if(dusdt.length !== 0){
              Dusdt = dusdt.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
             }
             wusdt = documents.filter((transaction) => transaction.pair == 'USDT')
             .filter((transaction) => transaction.type == 'withdraw')
             if(wusdt.length !== 0){
              Wusdt = wusdt.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
             }else{
              Wusdt = 0
             }
          }
          Usdt = +(Dusdt) - +(Wusdt)
      }
      if(Array.isArray(documents) == true && documents.length !== 0){
          shib = documents.filter((transaction) => transaction.pair == "Shib" )
          if(shib.length !== 0){
             dshib = documents.filter((transaction) => transaction.pair == 'Shib')
             .filter((transaction) => transaction.type == 'deposite')
             if(dshib.length !== 0){
              Dshib = dshib.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
             }
             wshib = documents.filter((transaction) => transaction.pair == 'Shib')
             .filter((transaction) => transaction.type == 'withdraw')
             if(wshib.length !== 0){
              Wshib = wshib.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
             } else{
              Wshib = 0
             }
          }
          Shiba = +(Dshib) - +(Wshib)
      }
      if(Array.isArray(documents) == true && documents.length !== 0){
          trx = documents.filter((transaction) => transaction.pair == "Trx" )
          if(trx.length !== 0){
             dtron = documents.filter((transaction) => transaction.pair == 'Trx')
             .filter((transaction) => transaction.type == 'deposite')
             if(dtron.length !== 0){
              Dtron = dtron.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
             }
             wtron = documents.filter((transaction) => transaction.pair == 'Trx')
             .filter((transaction) => transaction.type == 'withdraw')
             if(wtron.length !== 0){
              Wtron = wtron.map(transaction => +(transaction.amount))
              .reduce((acct, amount) => ((acct += amount)))
             }else{
              Wtron = 0
             }
          }
          Tron = +(Dtron) - (Wtron)
      }
      if(Array.isArray(documents) == true && documents.length !== 0 ){
          TotalPending = documents.filter((transaction) => transaction.status == 'Pending')
          .map(transaction => +(transaction.amount))
          .reduce((acct, amount) => ((acct += amount)))
      }
    useEffect(() => {
          if(Array.isArray(documents) == true && documents.length !== 0){
            const amount = balance - +TotalWithdrawal - +TotalWithdrawal
            setMainBalance(amount)
        }
    }, [document,balance, TotalWithdrawal])
      // console.log(Wethereum)
  return { balance, btcPrice, TotalWithdrawal, TotalDeposite, TotalPending, mainBalance, Binance, Bitcoin, Shiba, Usdt, Tron, Ethereum  }
}
