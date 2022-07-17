<form action="/signout" method="post">
    @csrf
    <button type="submit" class="dropdown-item"><i class="bi bi-box-arrow-right"></i> Logout</button>
</form>

{{-- <h1>{{ $name }}</h1> --}}

@foreach ($books as $book)
    <h1>Judul : {{ $book->title }}</h1>
    <h1>Author : {{ $book->author }}</h1>
    <h1>Category : {{ $book->category->name }}</h1>
    <h1><br></h1>
@endforeach