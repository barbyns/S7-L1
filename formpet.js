const PetNameInput = document.getElementById("PetName")
const ownerNameInput = document.getElementById("ownerName")
const speciesInput = document.getElementById("species")
const breedInput = document.getElementById("breed")

class PetName {
    constructor(_PetName, _ownerName, _species, _breed) {
this.PetName = _PetName
this._ownerName = _ownerName
this._species = _species
this._breed = _breed 
    }
}
const form = document.getElementById("user-form")