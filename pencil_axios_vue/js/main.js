const baseUrl = "http://localhost:5247/api/Pencil"

const app = Vue.createApp({
    data() {
        return {
            pageTitle : "Pencil Axios Webpage",
            pencilList: [],
            selectList: [],
            pencilId: 0,
            pencilType: "",
            pencilBrand: "",
            pencilThickness: 0,
            pencilLength: 0,
            pencilPrice: 0,
            statusCode: ""
        }
    },
    mounted() {
        this.getAllPencils()
    },
    methods: {
        getAllPencils() {
            console.log("Entered Get All Method")
            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                    this.pencilList = response.data
                    this.statusCode = response.status
                    this.selectList = this.pencilList
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        },
        addPencil() {
            axios.post(baseUrl, {"type": this.pencilType, "brand": this.pencilBrand, "thickness": this.pencilThickness, "length": this.pencilLength, "price": this.pencilPrice})
            .then(response => {
                console.log(response)
                console.log(response.data)
                location.reload()
            })
            .catch(error => {
                console.log(error)
            })
        },
        deletePencil() {
            console.log("Entered the Delete Pencil Method")
            axios.delete(baseUrl + "/" + this.pencilId)
            .then(response => {
                console.log(response)
                console.log(response.status)
                location.reload()
            })
            .catch(error => {
                console.log(error)
            })
        },
        updatePencil() {
            console.log("Entered the Update Pencil Method")
            axios.put(baseUrl + "/" + this.pencilId, {"type": this.pencilType, "brand": this.pencilBrand, "thickness": this.pencilThickness, "length": this.pencilLength, "price": this.pencilPrice})
            .then(respose => {
                console.log(respose)
                console.log(respose.status)
            })
            .catch(error => {
                console.log(error)
            })
        },
        filterByType() {
            this.selectList = this.selectList.filter(pencil => pencil.type === this.pencilType)
        },
        filterByBrand() {
            this.selectList = this.selectList.filter(pencil => pencil.brand.includes(this.pencilBrand))
        },
        sortByIdAsc() {
            this.selectList.sort((p1, p2) => p1.pencilId - p2.pencilId)
        },
        sortByIdDesc() {
            this.selectList.sort((p1, p2) => p2.pencilId - p1.pencilId)
        },
        sortByBrand() {
            this.selectList.sort((p1, p2) => p1.brand.localeCompare(p2.brand))
        },
        sortByThicknessAsc() {
            this.selectList.sort((p1, p2) => p1.thickness - p2.thickness)
        },
        sortByThicknessDesc() {
            this.selectList.sort((p1, p2) => p2.thickness - p1.thickness)
        },
        sortByLengthAsc() {
            this.selectList.sort((p1, p2) => p1.length - p2.length)
        },
        sortByLengthDesc() {
            this.selectList.sort((p1, p2) => p2.length - p1.length)
        },
        sortByPriceAsc() {
            this.selectList.sort((p1, p2) => p1.price - p2.price)
        },
        sortByPriceDesc() {
            this.selectList.sort((p1, p2) => p2.price - p1.price)
        }
    },
    computed: {
        myComputed() {

        }
    }
})