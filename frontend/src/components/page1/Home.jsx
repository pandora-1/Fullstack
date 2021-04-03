import React from 'react'

const Home = () => {
  
  return (
    <div className="App"> 
    
    
    {/* Mulai navbar disini */}
    {/* Mulai navbar disini */}
      <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand ml-5" href="/#">Tubes</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav"> {/* Ini sampai bawah yang aku tandai abaikan saja, tapi jangan dihapus */}
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/#"> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#"></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/#"></a>
            </li>
        </ul> {/* Sampai sini itu yang diabaikan ya  */}

        <ul class="navbar-nav mr-5">
            <li class="nav-item mr-5">
                <a class="nav-link" href="{{ url('/history') }}">History</a> {/* Ini tombol untuk ke history */}
            </li>
            <li class="nav-item">
            <button type="button" class="btn btn-dark" href="{{ url('/history') }}">Login</button> {/* Ini tombol untuk ke login */}
            </li>
        </ul>
    </div>
</nav> {/* Akhir dari navbar disini */}


{/* Masuk ke konten utama */}

{/* Ini yang sub judul sama dropdown get */}
<div class="container pt-5">
  <div class="card">
    <div class="card-body">
      <div class="container mb-3">
         <h5 class="card-title float-left">User List</h5>
         <div class="dropdown text-right">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-target="#myDropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Get
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> {/* Ini untuk button dropdown yang get itu */}
            <a class="dropdown-item nav-link" href="/#">Action</a> {/* Jumlahnya berapa aku gak tau tapi */}
            <a class="dropdown-item nav-link" href="/#">Another action</a>
            <a class="dropdown-item nav-link" href="/#">Something else here</a>
          </div>
        </div>
      </div>
    {/* Akhir dari sub judul dan dropdown get */}


      {/* Tempat untuk naruh output mulai dari sini */}
      {/* Ada dua kotak, satu agak besar, satunya kecil, bisa dihapus kalau ngerasa kebanyakan */}
      <div class="container pt-1 pb-1 pr-1 pl-3 mb-3 bg-light">
        <h6 class="text-black text-left">Test</h6> {/* Ini tempat untuk naruh output */}
      </div>
      <div class="container pt-1 pb-5 pr-1 pl-3 mb-3 bg-light">
        <h6 class="text-black text-left">Test</h6> {/* Ini juga untuk output ya */}
      </div>
      {/* Akhir dari output */}



      {/* Mulai ke form pengisian  */}
      <div class="container bg-light pr-5 pl-5 pb-2 pt-2">
      <form>

      <div class="form-group text-left">
        <label for="exampleFormControlSelect1">Media Type</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>application/json</option> {/* Ini yang media type, ada berapa aku kurang tau, jadinya aku isiin 5 */}
          <option>2</option> {/* Bentuk media type kayak yang bisa milih gitu opsinya */}
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div> 

          <div class="form-group text-left">
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> {/* Ini untuk naruh teks yang mau diinput */}
          </div>
          <button type="submit" class="btn btn-primary btn-lg float-right mt-3">Submit</button> {/* Ini tombol submitnya ya */}  
      </form>

      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Home;


