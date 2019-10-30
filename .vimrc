imap { {<C-R>=HasMore('[^{]','[^}]') ? "\n\t}" : " "<CR><left>
imap } <C-R>= HasMore('[^{]','[^}]') ? "}" : ""<CR><right>

imap < <<C-R>=HasMore('[^<]','[^>]') ? ">" : " "<CR><left>

imap ( (<C-R>=HasMore('[^(]','[^)]') ? ")" : " "<CR><left>
imap ) <C-R>= HasMore('[^(]','[^)]') ? ")" : ""<CR><right>

set tabstop=2 shiftwidth=2

if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif
call plug#begin('~/.vim/plugged')
	Plug 'leafgarland/typescript-vim'
	Plug 'peitalin/vim-jsx-typescript'
call plug#end()

function! HasMore(p1,p2)
	return CountInBuffer(a:p1)>CountInBuffer(a:p2)
endfunction

function! GetBuffer()
	%y
	return @
endfunction

function! CountInBuffer(pattern) range 
	return len(substitute(GetBuffer(),a:pattern,'','g'))
endfunction
