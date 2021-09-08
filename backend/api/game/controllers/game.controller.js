const gameService = require('../service/game.service')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


async function checkWin(req, res) {
  const playerPositions = req.body
  const winner = await gameService.checkWin(playerPositions.shape, playerPositions.positions)
  res.send(winner)
}

async function query(req, res) {
  const books = await gameService.query()
  res.send(books)
}


async function getById(req, res) {
  const { id } = req.params
  const currBook = await gameService.getById(id)
  res.json(currBook)
}

async function addReview(req, res) {
  const review = req.body
  await gameService.addReview(review)
  res.end()
}

async function removeReview(req, res) {
  const review = req.body
  await gameService.removeReview(review)
  res.end()
}


async function addGoogleBook(req, res) {
  const book = req.body
  await gameService.addGoogleBook(book)
  res.end()
}


async function removeBook(req, res) {
  const bookId = req.body.id
  console.log('this is bookId from bookConroller', bookId)
  await gameService.removeBook(bookId)
  res.end()
}



module.exports = {
  query,
  getById,
  addReview,
  removeReview,
  addGoogleBook,
  removeBook,
  checkWin
}
