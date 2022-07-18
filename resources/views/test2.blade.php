<h1 class="mb-3">Judul : {{ $book->title }}</h1>
<h2>Author :  {{ $book->author }}
<article class="my-3 fs-5">
    <h3>Description : <br></h3>
    {!! $book->description !!}
</article>
<a href="/test" class="mt-3 d-block">Back to dashboard</a>