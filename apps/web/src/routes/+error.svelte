<script>
    import { page } from '$app/stores';

    console.log($page.error);
</script>

<div class="grid place-items-center">
    <div>
        <h1>{$page.status}</h1>

        <pre class="mt-4 overflow-x-auto">
        {JSON.stringify($page.error, null, 2)}
        </pre>
    </div>
</div>
