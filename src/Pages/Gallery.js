import React from 'react'
import '../Pages/Gallery.css'
import Footer from './Footer'
import g1 from '../Pages/img/g1.jpeg'
import g2 from '../Pages/img/g2.jpeg'
import g3 from '../Pages/img/g3.jpeg'
const Gallery = () => {
  return (
    <>
    <div className="gal" id='gal'>
    <section id="gallery">
        <h2 className="gallery-heading">MetaVerse</h2>
        <div className="gallery-container">
            <div className="gallery-item"><img src={g1} alt="" srcset="" /></div>
            <div className="gallery-item"><img src={g2} alt="" srcset="" /></div>
            <div className="gallery-item"><img src={g3} alt="" srcset="" /></div>
          </div>
          <p>
 The Metaverse is a term often used to describe a collective virtual shared space, typically created by the convergence of various digital technologies. It's a concept that originated in science fiction but has gained traction in discussions about the future of the internet and virtual reality.



During the event, discussions likely revolved around several key concepts related to blockchain technology, NFTs (Non-Fungible Tokens), and PoW (Proof of Work). Here's a breakdown of each:

Blockchain: Blockchain is a decentralized and distributed ledger technology that records transactions across a network of computers. Each block in the chain contains a number of transactions, and every time a new transaction occurs, a new block is added to the chain. This creates a permanent and transparent record of transactions that is difficult to tamper with, making blockchain suitable for applications such as cryptocurrency, supply chain management, and smart contracts.

NFTs (Non-Fungible Tokens): NFTs are a type of digital asset that represent ownership of unique items or pieces of content, such as artwork, music, videos, or virtual real estate, on the blockchain. Unlike cryptocurrencies like Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis, NFTs are indivisible and cannot be replicated. Each NFT has a unique digital signature that verifies its authenticity and ownership, making it valuable as a form of digital collectible or investment.

PoW (Proof of Work): PoW is a consensus mechanism used in blockchain networks to validate and confirm transactions. In a PoW system, miners compete to solve complex mathematical puzzles, with the first miner to solve the puzzle earning the right to add a new block of transactions to the blockchain. This process requires significant computational power and energy consumption, but it ensures the security and integrity of the blockchain by making it economically costly for attackers to manipulate the ledger.</p>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default Gallery