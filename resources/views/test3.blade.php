<form action="/test/signout" method="post">
    @csrf
    <button type="submit" class="dropdown-item"><i class="bi bi-box-arrow-right"></i> Logout</button>
</form>

<h1>{{ auth()->user()->name }}</h1>