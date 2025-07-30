import Main from '../../components/Layout/Main';
import BookForm from '../../features/books/BookForm';

const AddBooks = () => {
	return (
		<div>
			<Main page="Tambah Buku">
				<div className="bg-white rounded-lg p-5">
					<div className="">
						<div class="flex justify-between mb-5">
							<h1 class="text-sm font-semibold">Tambah Buku</h1>
							<a
								href="/admin/books"
								class="text-sm font-semibold text-blue-600"
							>
								Kembali
							</a>
						</div>
						<BookForm />
					</div>
				</div>
			</Main>
		</div>
	);
};

export default AddBooks;
