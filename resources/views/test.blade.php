<form action="/signout" method="post">
    @csrf
    <button type="submit" class="dropdown-item"><i class="bi bi-box-arrow-right"></i> Logout</button>
</form>

{{-- ganti "/test" menjadi "/dashboard" jika mau fetch ke react --}}
<form action="/test">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search.." name="search" value="{{ request('search') }}">
      <button class="btn btn-danger" type="submit">Search</button>
    </div>
  </form>

  {{ $books->links() }}

@if ($books->count() > 0)
  @foreach ($books as $book)
  <h1>Judul : {{ $book->title }}</h1>
  <h1>Author : {{ $book->author }}</h1>
  <h1>Category : {{ $book->category->name }}</h1>
  <h1><br></h1>
  @endforeach
@else
  <h1>Buku Tidak Ditemukan !!!</h1>
@endif
