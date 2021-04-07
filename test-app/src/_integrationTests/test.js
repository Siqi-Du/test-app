import moxios from 'moxios'; // mock axios(http request and response)
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = [{ // returned resp as in reducer
            title: 'Example title 1',
            body: 'Some Text'
        },{
            title: 'Example title 2',
            body: 'Some Text'
        },{
            title: 'Example title 3',
            body: 'Some Text'
        }];
        const store = testStore(); // create a test store

        moxios.wait(() => { // 用moc axios模拟一个resp
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState //[] to make this test fails
            })
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
        
    });

});