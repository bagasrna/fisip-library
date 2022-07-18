<h1 class="mb-3">Judul : {{ $book->title }}</h1>
<h5>By. {{ $book->author }}
<article class="my-3 fs-5">
    {!! $book->description !!}
</article>
<a href="/test" class="mt-3 d-block">Back to dashboard</a>